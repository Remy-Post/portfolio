import {GitHubCalendar} from "react-github-calendar";

export default function GitHub() {
    const username = "Remy-Post";

    const vibrantTheme = {
        light: [
            '#ebedf0', // Level 0 (Empty)
            '#9be9a8', // Level 1
            '#40c463', // Level 2
            '#30a14e', // Level 3
            '#216e39', // Level 4
        ],
        dark: [
            '#161b22', // Level 0 (Background)
            '#0e4429', // Level 1
            '#006d32', // Level 2
            '#26a641', // Level 3
            '#39d353', // Level 4 (Neon/Bright Green)
        ],
    };

  return (
      <div className="h-[83vh]">
          <div className="">
              <a
              href="https://github.com/Remy-Post"
              target="_blank"
              >
                    <h1 className="text-4xl text-center py-5 font-bold underline underline-offset-2 hover:text-blue-500">GitHub</h1>
              </a>
          </div>

          <div className="flex justify-center">
              <div className="p-4 rounded-lg mx-auto">
                  <GitHubCalendar
                      username="Remy-Post"
                      colorScheme="dark" // Change to 'light' or remove to follow system preference
                      theme={vibrantTheme}
                      blockSize={15}
                      blockMargin={5}
                      fontSize={16}
                  />
              </div>
          </div>

          {/* 3. Stats Grid */}
           <div className="grid grid-cols-[40%_40%] justify-evenly gap-4 py-5">

              {/* Card A: Overall Stats (Commits, PRs, Stars) */}
              <div className="flex justify-center p-4 rounded-xl shadow-sm bg-gray-200">
                  <img
                      className="h-40 w-full object-contain"
                      src={`https://github-readme-stats.vercel.app/api?username=${username}&theme=radical&hide_border=true&bg_color=00000000`}
                      alt="GitHub Stats"
                  />
              </div>

              {/* Card B: Top Languages (The step you asked for) */}
              <div className="flex justify-center p-4 rounded-xl shadow-sm bg-gray-200">
                  <img
                      className="h-40 w-full object-contain"
                      src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=radical&hide_border=true&bg_color=00000000`}
                      alt="Top Languages"
                  />
              </div>
          </div>
      </div>);
}