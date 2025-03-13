'use client';
import { ToastContainer, toast } from 'react-toastify';
import React, { useEffect, useRef, useState } from 'react';
import { FiPaperclip } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { IoMdSend } from "react-icons/io";
import { FaRegStopCircle } from "react-icons/fa";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faRobot } from "@fortawesome/free-solid-svg-icons";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};


export function ChatAI() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [file, setFile] = useState<File | undefined>();
  const [isStreaming, setIsStreaming] = useState(false);
  const [abortController, setAbortController] = useState<AbortController | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const savedMessages = loadMessagesFromLocalStorage();
    if (savedMessages.length > 0) {
      setMessages(savedMessages);
    }
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleUpload = () => {
    fileInputRef.current?.click();
  };

  const saveMessagesToLocalStorage = (messages: Message[]) => {
    localStorage.setItem('chatMessages', JSON.stringify(messages));
  };

  const loadMessagesFromLocalStorage = (): Message[] => {
    const messages = localStorage.getItem('chatMessages');
    return messages ? JSON.parse(messages) : [];
  };

  const stopStreaming = () => {
    if (abortController) {
      abortController.abort();
      setIsStreaming(false);
      setAbortController(null);
    }
  };

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!input.trim() && !file) {
      toast('Necessário encaminhar uma mensagem ou arquivo');
      return;
    }

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: input,
    };

    setMessages((prev) => {
      const updatedMessages = [...prev, userMessage];
      saveMessagesToLocalStorage(updatedMessages);
      return updatedMessages;
    });

    const assistantMessageId = `assistant-${Date.now()}`;
    setMessages((prev) => {
      const updatedMessages: Message[] = [
        ...prev,
        {
          id: assistantMessageId,
          role: "assistant",
          content: '',
        }
      ];
      return updatedMessages;
    });


    setInput('');

    try {
      if (file) {
        try {
          const formData = new FormData();
          const user = localStorage.getItem('user');

          formData.append('file', file);

          if (user !== null) {
            formData.append('user', user);
          } else {
            formData.append('user', '');
          }

          await axios.post(
            '/api/proxy/files/upload',
            formData,
            {
              headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_KEY_API}`,
                'Content-Type': 'multipart/form-data',
              },
            }
          );

          setFile(undefined);
        } catch (error) {
          console.error('Erro ao enviar arquivo:', error);
          toast('Erro ao enviar arquivo. Tente novamente.');
        }
      }

      const userId = localStorage.getItem('user') || `user-${Math.random().toString(36).substring(2, 10)}`;
      localStorage.setItem('user', userId);

      const controller = new AbortController();
      setAbortController(controller);
      setIsStreaming(true);
      const response = await fetch('/api/proxy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          inputs: {
            text: input,
            user_question: input,
            user_name: "Usuário",
            user_location: "Brasil",
          },
          query: input,
          response_mode: 'streaming',
          conversation_id: '',
          user: userId,
        }),
      });

      if (!response.ok) {
        throw new Error(`Erro na API: ${response.status}`);
      }

      const reader = response.body?.getReader();
      if (!reader) throw new Error('Não foi possível iniciar o streaming');

      const decoder = new TextDecoder();
      let fullContent = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });

        try {
          const lines = chunk.split('\n\n');
          for (const line of lines) {
            if (line.startsWith('data: ')) {
              const jsonStr = line.substring(6);
              if (jsonStr.trim() && jsonStr !== '[DONE]') {
                try {
                  const data = JSON.parse(jsonStr);
                  if (data.answer !== undefined) {
                    fullContent += data.answer;

                    setMessages(prev => {
                      const updatedMessages = [...prev];
                      const assistantMsgIndex = updatedMessages.findIndex(msg => msg.id === assistantMessageId);
                      if (assistantMsgIndex !== -1) {
                        updatedMessages[assistantMsgIndex] = {
                          ...updatedMessages[assistantMsgIndex],
                          content: fullContent
                        };
                      }
                      return updatedMessages;
                    });
                  }
                  // eslint-disable-next-line @typescript-eslint/no-unused-vars
                } catch (jsonError) {
                  console.log('Chunk JSON incompleto, aguardando mais dados...');
                }
              }
            }
          }
        } catch (e) {
          console.error('Erro ao processar chunk:', e);
        }
      }

      setMessages(prev => {
        saveMessagesToLocalStorage(prev);
        return prev;
      });

    } catch (error) {
      if (error instanceof Error && error.name === 'AbortError') {
        console.log('Streaming foi interrompido pelo usuário');
      } else {
        console.error('Erro durante a comunicação com a API:', error);

        setMessages(prev => {
          const updatedMessages = [...prev];
          const assistantMsgIndex = updatedMessages.findIndex(msg => msg.id === assistantMessageId);
          if (assistantMsgIndex !== -1) {
            updatedMessages[assistantMsgIndex] = {
              ...updatedMessages[assistantMsgIndex],
              content: 'Desculpe, ocorreu um erro. Tente novamente mais tarde.'
            };
          }
          saveMessagesToLocalStorage(updatedMessages);
          return updatedMessages;
        });

        toast('Erro ao se comunicar com a IA. Tente novamente.');
      }
    } finally {
      setIsStreaming(false);
      setAbortController(null);
    }
  };

  return (
    <div className="flex min-h-[60px] items-center justify-center bg-slate-50 
    dark:bg-gray-900 text-black dark:text-slate-700 rounded-md">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        toastClassName="bg-[#226094] dark:bg-slate-800 text-white rounded-lg shadow-lg p-4 border border-[#0fcedc]"
        progressClassName="bg-[#0fcedc]"
      />

      <Card className="lg:w-[45rem] sm:w-[400px] md:w-[500px] min-h-[700px] grid grid-rows-[min-content_1fr_min-content]">
        <CardHeader>
          <CardTitle className="text-[#0879d8]">Carcino AI</CardTitle>
          <CardDescription>Caring for better life</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 overflow-y-auto max-h-[500px] p-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-3 items-start ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.role === "assistant" && (
                <FontAwesomeIcon icon={faRobot} className="mt-1 flex-shrink-0" />
              )}
              <div
                className={`p-3 rounded-lg w-fit max-w-[80%] ${msg.role === 'user'
                  ? 'bg-[#0879d8] text-white rounded-tr-none'
                  : 'bg-gray-200 dark:bg-slate-900 rounded-tl-none'
                  }`}
              >
                <span className="block font-bold">
                  {msg.role === "user" ? "User" : "AI"}
                </span>
                <p className="text-sm">
                  {msg.content || (msg.role === 'assistant' && isStreaming ? '...' : '')}
                </p>
              </div>
              {msg.role === 'user' && (
                <FontAwesomeIcon icon={faUser} className="mt-1 flex-shrink-0" />
              )}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </CardContent>

        <CardFooter>
          <form className="flex w-full gap-2" onSubmit={sendMessage}>
            <div className="relative w-full">
              <Input
                placeholder="How can I help you about carcinomatosis?"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="pl-9"
                disabled={isStreaming}
              />

              <FiPaperclip
                className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${isStreaming ? 'text-gray-300' : 'text-gray-400 cursor-pointer'}`}
                onClick={isStreaming ? undefined : handleUpload}
              />

              <input
                ref={fileInputRef}
                type="file"
                onChange={(e) => setFile(e.target.files ? e.target.files[0] : undefined)}
                className="hidden"
                disabled={isStreaming}
              />

              {file && (
                <div className="text-xs text-gray-500 mt-1 ml-2">
                  Arquivo: {file.name}
                </div>
              )}
            </div>
            {isStreaming ? (
              <Button
                className="bg-red-500 hover:bg-red-600 text-white"
                type="button"
                onClick={stopStreaming}
              >
                <FaRegStopCircle />
              </Button>
            ) : (
              <Button
                className="hover:bg-[#3f89ce] bg-[#0879d8] text-white"
                type="submit"
                disabled={!input.trim() && !file}
              >
                <IoMdSend />
              </Button>
            )}
          </form>
        </CardFooter>
      </Card>
    </div>
  );
}