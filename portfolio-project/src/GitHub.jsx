import {GitHubCalendar} from "react-github-calendar";

export default function GitHub() {
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
      <>
          <div className="">
            <h1 className="text-3xl">GitHub</h1>
          </div>
          <a className="hover:underline text-blue-500" href="https://github.com/Remy-Post" target="_blank">GitHub</a>
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
      </>);

}