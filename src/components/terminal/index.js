import { AnimatedSpan, Terminal, TypingAnimation } from "../magicui/terminal";

  
  export function TerminalDemo() {
    return (
    <div className="flex justify-center  items-center w-screen px-5 md:px-1  py-5">
      <Terminal>
        <TypingAnimation>&gt; Project Discussion and elaboration</TypingAnimation>
  
        <AnimatedSpan delay={1500} className="text-green-500">
          <span>✔ Project Planning.</span>
        </AnimatedSpan>
  
        <AnimatedSpan delay={2000} className="text-green-500">
          <span>✔ Project architecture Design.</span>
        </AnimatedSpan>
  
        <AnimatedSpan delay={2500} className="text-green-500">
          <span>✔ Project Planning  Started.</span>
        </AnimatedSpan>
  
        <AnimatedSpan delay={3000} className="text-green-500">
          <span>✔ Implementation Started.</span>
        </AnimatedSpan>
  
        <AnimatedSpan delay={3500} className="text-green-500">
          <span>✔ Project Building.</span>
        </AnimatedSpan>
  
        <AnimatedSpan delay={4000} className="text-green-500">
          <span>✔ Testing and Automation .</span>
        </AnimatedSpan>
  
        <AnimatedSpan delay={4500} className="text-green-500">
          <span>✔ Updating Clients Requirements</span>
        </AnimatedSpan>
  
        <AnimatedSpan delay={5000} className="text-green-500">
          <span>✔ Updating User Interface Performance</span>
        </AnimatedSpan>
  
        <AnimatedSpan delay={5500} className="text-green-500">
          <span>✔ Installing dependencies.</span>
        </AnimatedSpan>
  
        <AnimatedSpan delay={6000} className="text-blue-500">
          <span>ℹ Updated 1 file:</span>
          <span className="pl-2">- lib/utils.ts</span>
        </AnimatedSpan>
  
        <TypingAnimation delay={6500} className="text-muted-foreground">
          Success! Project is completed.
        </TypingAnimation>
  
        <TypingAnimation delay={7000} className="text-muted-foreground">
          Your Project is ready to Delivered.
        </TypingAnimation>
      </Terminal>
      </div>
    );
  }
  