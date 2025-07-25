import { EyeIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Checkbox } from "../../components/ui/checkbox";
import { Input } from "../../components/ui/input";

export const LogInAsAClient = (): JSX.Element => {
  // Data for the form fields
  const formFields = [
    {
      id: "email",
      label: "Email Address",
      placeholder: "Enter your email",
      type: "text",
      required: true,
    },
    {
      id: "password",
      label: "Password",
      placeholder: "Enter your password",
      type: "password",
      required: true,
    },
  ];

  return (
    <div className="min-h-screen bg-white lg:bg-app-background">
      <div className="min-h-screen flex flex-col lg:flex-row">
        {/* Left side with purple background and image */}
        <div className="hidden lg:flex lg:w-1/2 bg-[#f7e9ff] rounded-[20px] overflow-hidden relative">
          <img
            className="absolute w-[198px] h-[97px] top-6 left-[45px] z-10"
            alt="Team Achieve Logo"
            src="/image-30.png"
          />

          <div className="flex flex-col items-center gap-6 absolute top-[168px] left-[65px] right-[65px]">
            <img
              className="w-full max-w-[626px] h-auto object-cover"
              alt="People smiling together"
              src="/image-31.png"
            />

            <div className="flex flex-col items-center gap-2 text-center">
              <div className="[font-family:'Lora',Helvetica] font-bold text-[#61227d] text-xl tracking-[0] leading-[30px]">
                Team Achieve
              </div>

              <div className="[font-family:'Lora',Helvetica] font-bold text-graygray-8 text-lg tracking-[0] leading-7">
                Your perfect solution for funding your desires
              </div>
            </div>
          </div>
        </div>

        {/* Right side with login form */}
        <div className="flex-1 flex flex-col items-center justify-center px-4 py-8 lg:px-8 lg:py-0 bg-white lg:bg-app-background">
          {/* Mobile logo */}
          <div className="lg:hidden mb-8">
            <img
              className="w-[150px] h-auto"
              alt="Team Achieve Logo"
              src="/image-30.png"
            />
          </div>

          <div className="flex flex-col items-center gap-1 mb-6 text-center">
            <div className="font-heading-bold font-[number:var(--heading-bold-font-weight)] text-[#61227d] text-[length:var(--heading-bold-font-size)] lg:text-[32px] text-2xl tracking-[var(--heading-bold-letter-spacing)] leading-[var(--heading-bold-line-height)] [font-style:var(--heading-bold-font-style)]">
              Welcome Back
            </div>

            <div className="font-body-1 font-[number:var(--body-1-font-weight)] text-graygray-8 text-[length:var(--body-1-font-size)] tracking-[var(--body-1-letter-spacing)] leading-[var(--body-1-line-height)] [font-style:var(--body-1-font-style)] px-4">
              Enter your email address and password to access your account.
            </div>
          </div>

          <Card className="w-full max-w-[620px] border-none shadow-none">
            <CardContent className="p-0">
              <div className="flex flex-col items-center gap-6 lg:gap-10">
                <div className="flex flex-col items-center gap-4 lg:gap-6 w-full">
                  {/* Email field */}
                  <div className="flex flex-col items-start gap-2 w-full">
                    <label className="font-body-1 font-[number:var(--body-1-font-weight)] text-[length:var(--body-1-font-size)] tracking-[var(--body-1-letter-spacing)] leading-[var(--body-1-line-height)] [font-style:var(--body-1-font-style)]">
                      <span className="text-[#3e3e3e]">Email Address </span>
                      <span className="text-[#ee193f]">*</span>
                    </label>

                    <Input
                      className="flex items-start gap-2.5 px-2.5 py-[13px] w-full bg-white rounded-lg border border-solid border-[#dddddd] h-12"
                      placeholder="Enter your email"
                    />
                  </div>

                  {/* Password field */}
                  <div className="flex flex-col items-start gap-2 w-full">
                    <label className="flex items-center gap-1 w-full">
                      <span className="text-[#3e3e3e] font-body-1 font-[number:var(--body-1-font-weight)] text-[length:var(--body-1-font-size)] tracking-[var(--body-1-letter-spacing)] leading-[var(--body-1-line-height)] [font-style:var(--body-1-font-style)]">
                        Password{" "}
                      </span>
                      <span className="text-[#ee193f] font-body-1 font-[number:var(--body-1-font-weight)] text-[length:var(--body-1-font-size)] tracking-[var(--body-1-letter-spacing)] leading-[var(--body-1-line-height)] [font-style:var(--body-1-font-style)]">
                        *
                      </span>
                    </label>

                    <div className="flex h-12 items-center justify-between w-full bg-white rounded overflow-hidden border border-solid border-[#c6c6c6]">
                      <Input
                        type="password"
                        className="flex-1 border-none shadow-none pl-2.5 h-full"
                        placeholder="Enter your password"
                      />
                      <div className="inline-flex items-center gap-2.5 px-4 py-2 relative self-stretch flex-[0_0_auto] bg-[#f7f7f7] border-l border-solid border-[#c6c6c6]">
                        <EyeIcon className="w-6 h-6 text-graygray-7" />
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-2 sm:gap-0">
                      <div className="flex items-center gap-2">
                        <Checkbox
                          id="remember-me"
                          className="w-6 h-6 rounded-sm"
                        />
                        <label
                          htmlFor="remember-me"
                          className="font-body-2 font-[number:var(--body-2-font-weight)] text-graygray-7 text-[length:var(--body-2-font-size)] tracking-[var(--body-2-letter-spacing)] leading-[var(--body-2-line-height)] [font-style:var(--body-2-font-style)]"
                        >
                          Remember me
                        </label>
                      </div>

                      <button className="font-body-2 font-[number:var(--body-2-font-weight)] text-[#61227d] text-[length:var(--body-2-font-size)] tracking-[var(--body-2-letter-spacing)] leading-[var(--body-2-line-height)] [font-style:var(--body-2-font-style)]">
                        Forgot Password?
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-2.5 w-full">
                  <Button className="flex items-center justify-center gap-2.5 px-6 py-[11px] w-full bg-[#61227d] rounded-lg hover:bg-[#4e1c64] transition-colors h-12">
                    <span className="font-[number:var(--button-text-large-font-weight)] text-white text-[length:var(--button-text-large-font-size)] leading-[var(--button-text-large-line-height)] font-button-text-large tracking-[var(--button-text-large-letter-spacing)] [font-style:var(--button-text-large-font-style)]">
                      Sign in
                    </span>
                  </Button>

                  <div className="flex items-center gap-1 text-center">
                    <span className="font-body-1 font-[number:var(--body-1-font-weight)] text-graygray-8 text-[length:var(--body-1-font-size)] tracking-[var(--body-1-letter-spacing)] leading-[var(--body-1-line-height)] [font-style:var(--body-1-font-style)]">
                      Don&apos;t have an account?
                    </span>
                    <button className="font-[number:var(--subtitle-1-font-weight)] text-[#61227d] text-[length:var(--subtitle-1-font-size)] leading-[var(--subtitle-1-line-height)] font-subtitle-1 tracking-[var(--subtitle-1-letter-spacing)] [font-style:var(--subtitle-1-font-style)]">
                      Sign up
                    </button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Mobile footer with brand info */}
        <div className="lg:hidden text-center py-6 px-4 bg-[#f7e9ff]">
          <div className="[font-family:'Lora',Helvetica] font-bold text-[#61227d] text-lg mb-1">Team Achieve</div>
          <div className="[font-family:'Lora',Helvetica] font-bold text-graygray-8 text-sm">
            Your perfect solution for funding your desires
          </div>
        </div>
      </div>
    </div>
  );
};
