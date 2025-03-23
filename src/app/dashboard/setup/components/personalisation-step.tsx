"use client";

import { useState } from "react";
import { Textarea } from "@/app/components/ui/textarea";
import { Label } from "@/app/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/app/components/ui/radio-group";
import { Button } from "@/app/components/ui/button";
import { Slider } from "@/app/components/ui/slider";
import { Card, CardContent } from "@/app/components/ui/card";
import { UserRound, Volume2, Play, Pause, RefreshCw } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/app/components/ui/tabs";

interface PersonalisationStepProps {
  setupData: any;
  updateSetupData: (data: any) => void;
}

export default function PersonalisationStep({ setupData, updateSetupData }: PersonalisationStepProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [voiceStyle, setVoiceStyle] = useState("professional");
  const [voiceSpeed, setVoiceSpeed] = useState(1);
  
  const handleVoiceTypeChange = (value: string) => {
    updateSetupData({ voiceType: value });
  };
  
  const handleGreetingChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    updateSetupData({ greetingScript: e.target.value });
  };
  
  const handleVoiceStyleChange = (value: string) => {
    setVoiceStyle(value);
  };
  
  const handleVoiceSpeedChange = (value: number[]) => {
    setVoiceSpeed(value[0]);
  };
  
  const playAudioPreview = () => {
    // In a real implementation, this would trigger a real audio preview
    setIsPlaying(!isPlaying);
    
    // Simulate audio playback ending after 3 seconds
    if (!isPlaying) {
      setTimeout(() => {
        setIsPlaying(false);
      }, 3000);
    }
  };
  
  const generateSampleGreeting = () => {
    const businessName = setupData.businessName || "Your Business";
    
    const greetings = [
      `Hello, thank you for calling ${businessName}. How may I assist you today?`,
      `Thank you for reaching ${businessName}. How can I help you?`,
      `Welcome to ${businessName}. How may I direct your call today?`,
      `You've reached ${businessName}. How can I be of service to you?`,
      `This is ${businessName}. How can I assist you today?`
    ];
    
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    updateSetupData({ greetingScript: randomGreeting });
  };
  
  return (
    <div>
      <div className="flex items-center space-x-2 mb-6">
        <UserRound className="h-6 w-6 text-blue-500" />
        <h2 className="text-2xl font-bold">Personalize Your AI Receptionist</h2>
      </div>
      
      <p className="text-gray-600 dark:text-gray-300 mb-8">
        Customize how your AI receptionist sounds and what it says when answering calls.
      </p>
      
      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-medium mb-4">Voice Selection</h3>
          
          <RadioGroup 
            value={setupData.voiceType} 
            onValueChange={handleVoiceTypeChange}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <Card className={`border-2 ${setupData.voiceType === 'female' ? 'border-blue-500' : 'border-transparent'}`}>
              <CardContent className="p-4">
                <div className="flex items-start space-x-4">
                  <RadioGroupItem value="female" id="female" className="mt-1" />
                  <div className="flex-1">
                    <Label htmlFor="female" className="font-medium text-lg">
                      Sarah
                    </Label>
                    <p className="text-sm text-gray-500 mb-3">
                      Professional female voice with a warm, friendly tone
                    </p>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="flex items-center"
                      onClick={playAudioPreview}
                    >
                      {isPlaying && setupData.voiceType === 'female' ? (
                        <>
                          <Pause className="h-4 w-4 mr-2" />
                          Stop Preview
                        </>
                      ) : (
                        <>
                          <Play className="h-4 w-4 mr-2" />
                          Preview Voice
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className={`border-2 ${setupData.voiceType === 'male' ? 'border-blue-500' : 'border-transparent'}`}>
              <CardContent className="p-4">
                <div className="flex items-start space-x-4">
                  <RadioGroupItem value="male" id="male" className="mt-1" />
                  <div className="flex-1">
                    <Label htmlFor="male" className="font-medium text-lg">
                      Michael
                    </Label>
                    <p className="text-sm text-gray-500 mb-3">
                      Professional male voice with a clear, confident tone
                    </p>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="flex items-center"
                      onClick={playAudioPreview}
                    >
                      {isPlaying && setupData.voiceType === 'male' ? (
                        <>
                          <Pause className="h-4 w-4 mr-2" />
                          Stop Preview
                        </>
                      ) : (
                        <>
                          <Play className="h-4 w-4 mr-2" />
                          Preview Voice
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </RadioGroup>
        </div>
        
        <div className="pt-6 border-t">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium">Voice Characteristics</h3>
            
            <Tabs defaultValue="professional" onValueChange={handleVoiceStyleChange}>
              <TabsList>
                <TabsTrigger value="professional">Professional</TabsTrigger>
                <TabsTrigger value="friendly">Friendly</TabsTrigger>
                <TabsTrigger value="formal">Formal</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="voice-speed">Speaking Speed</Label>
                <span className="text-sm text-gray-500">
                  {voiceSpeed < 0.9 ? "Slower" : voiceSpeed > 1.1 ? "Faster" : "Normal"}
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <Volume2 className="h-4 w-4 text-gray-400" />
                <Slider
                  id="voice-speed"
                  min={0.7}
                  max={1.3}
                  step={0.1}
                  value={[voiceSpeed]}
                  onValueChange={handleVoiceSpeedChange}
                  className="flex-1"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-6 border-t">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium">Greeting Message</h3>
            <Button 
              variant="outline" 
              size="sm"
              onClick={generateSampleGreeting}
              className="flex items-center"
            >
              <RefreshCw className="h-4 w-4 mr-2" />
              Generate Sample
            </Button>
          </div>
          
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="greeting">
                Customize what your receptionist says when answering calls
              </Label>
              <Textarea
                id="greeting"
                value={setupData.greetingScript}
                onChange={handleGreetingChange}
                placeholder="Hello, thank you for calling [Your Business]. How may I assist you today?"
                className="min-h-[100px]"
              />
              <p className="text-xs text-gray-500">
                Use {"{businessName}"} to automatically insert your business name
              </p>
            </div>
            
            <Card className="bg-gray-50 dark:bg-gray-800 border-dashed">
              <CardContent className="p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Volume2 className="h-4 w-4 text-blue-500" />
                  <h4 className="font-medium">Preview</h4>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 italic">
                  &quot;{setupData.greetingScript.replace('{businessName}', setupData.businessName || 'Your Business')}&quot;
                </p>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="mt-4 flex items-center"
                  onClick={playAudioPreview}
                >
                  {isPlaying ? (
                    <>
                      <Pause className="h-4 w-4 mr-2" />
                      Stop Preview
                    </>
                  ) : (
                    <>
                      <Play className="h-4 w-4 mr-2" />
                      Play Greeting
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}