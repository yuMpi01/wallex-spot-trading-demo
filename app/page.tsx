import TopBar from "@/components/topBar/topBar";
import TradingViewWidget from "@/components/chart/chart";

export default function Home() {
  return (
    <main className=" bg-[#10141B] ">
      <div className="topBar">
        <TopBar />
      </div>
      <div className="mainContent flex">
        <div className=" w-1/4 h-75 ">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium mui-cjxw5c"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#00B88A"
                  fill-rule="evenodd"
                  d="M22.423 6.708a1 1 0 0 0-.923-.618h-4.909a1 1 0 1 0 0 2h2.494l-5.358 5.356-3.383-3.384c-.375-.375-1.038-.375-1.414 0l-6.138 6.14a1 1 0 0 0 1.415 1.415l5.43-5.433 3.382 3.383a1 1 0 0 0 1.415 0L20.5 9.503V12a1 1 0 1 0 2 0V7.09c0-.13-.027-.26-.077-.382"
                  clip-rule="evenodd"
                ></path>
              </svg> */}
              
        </div>
        <div className=" w-2/4 h-96 shadow-2xl bg-[#11161D] p-3 ">
          <TradingViewWidget />
        </div>
        <div className=" w-1/4 h-75 "></div>
      </div>
    </main>
  );
}
