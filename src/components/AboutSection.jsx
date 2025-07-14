import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" classNAame="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        {/* This is going to be used to disaply our experiences with certain things like react, node etc i dont know if will keep this so yeah*/}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {/* Details about me*/}
            <h3 className="text-2xl font-semibol">
              Passionate Web Developer & Tech Enthusiast
            </h3>

            <p className="text-muted-foreground">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum
              corporis maiores sequi libero architecto blanditiis! Provident
              minima fuga nulla eius quo! Officia deleniti at quas!
            </p>

            <p className="text-muted-foreground">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum
              corporis maiores sequi libero architecto blanditiis! Provident
              minima fuga nulla eius quo! Officia deleniti at quas!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Contact Me
              </a>

              {/* <a href="/Oliver Metz CV - PL.pdf" className="cosmic-button"> */}
              <a
                href="/Oliver Metz CV - PL.pdf"
                className=" bouncy-button px-6 py-2 rounded-full border border-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {/* Skills will go here */}

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Development</h4>
                  <p className="text-muted-foreground">
                    Here list some text about backend development etc
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Here list some text about backend development etc
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Project Management</h4>
                  <p className="text-muted-foreground">
                    Here list some text about backend development etc
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
