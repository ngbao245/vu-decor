import "./hero.css";
import hero1Img from "../../assets/hero1-img.jpg";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <div className="relative h-screen bg-black">
      <img
        className="absolute inset-0 w-full h-full object-cover "
        src="https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/474635398_122117507678618470_2300152676572287118_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=jsJU4e3-_esQ7kNvwEUJy0O&_nc_oc=Adn7OoitLOfLA_qdbrYgF6hvSiEdy6k0llkFo7LxcR1djMgQjDAdga9uCIEuOFWbBj9fJwVPkwC587lPhIzixrSQ&_nc_zt=23&_nc_ht=scontent.fsgn5-5.fna&_nc_gid=07B5_Tq-u_62wmoVZ4Lopw&oh=00_AfJohl8EuLA8ZVg44hIb6MyzoJ9hnYPYxexX1hUKSDCX7w&oe=683CA911"
        alt="hero.jpg"
      />
      <div className="absolute flex items-center justify-center bg-black inset-0 opacity-30"></div>
      <div className="absolute inset-0 flex items-center justify-center px-3">
        <div className="relative w-full h-full flex flex-col gap-5 justify-center items-center px-3 ">
          <div className="flex flex-col gap-5">
            <b className="text-[1.6rem] md:text-[3.5rem] font-sans text-white uppercase">
              Kiến tạo không gian, <br />
              nâng tầm cuộc sống
            </b>
            <span className="text-lg md:text-2xl font-sans text-white">
              Mỗi không gian là một câu chuyện, mỗi trải nghiệm là một đẳng cấp
              mới
            </span>
          </div>

          {/* <div className="hidden absolute lg:flex w-[200px] aspect-square top-20 right-5 bg-white p-1 rounded-lg">
            <div className="relative w-full h-full">
              <img
                src="https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/473526882_122117507666618470_3369083212097705845_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=JyaGM6H8rgUQ7kNvwHt0rTm&_nc_oc=AdlQQAohH1vk-kpgJBNp7PgLznXtFAghkJzZCNkDWmggu2nnpDRItbfqoxuXzT-8CHpcsshLznIfeaYnc8aSxUHU&_nc_zt=23&_nc_ht=scontent.fsgn5-8.fna&_nc_gid=7ljIjJBd3bjMSDPwi12BMg&oh=00_AfKAhlmN13-N4Yc3zdo7qzD7-79H_zuaIyGTYeTSJRzoTQ&oe=683CC4C4"
                alt=""
                className="absolute w-full h-full object-cover rounded-md"
              />
              <div className="absolute w-1/2 bottom-0 rounded-tr-lg aspect-3/2 bg-white"></div>
            </div>
          </div>
          <div className="hidden absolute lg:grid lg:grid-cols-2 w-[300px] left-5 bottom-30 aspect-2/1 bg-white p-1 rounded-lg">
            <div className="col-span-1 w-full h-full">
              <img
                src="https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/473526882_122117507666618470_3369083212097705845_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=JyaGM6H8rgUQ7kNvwHt0rTm&_nc_oc=AdlQQAohH1vk-kpgJBNp7PgLznXtFAghkJzZCNkDWmggu2nnpDRItbfqoxuXzT-8CHpcsshLznIfeaYnc8aSxUHU&_nc_zt=23&_nc_ht=scontent.fsgn5-8.fna&_nc_gid=7ljIjJBd3bjMSDPwi12BMg&oh=00_AfKAhlmN13-N4Yc3zdo7qzD7-79H_zuaIyGTYeTSJRzoTQ&oe=683CC4C4"
                alt=""
                className=" w-full h-full object-cover rounded-md"
              />
            </div>
          </div> */}
          {/* <div className="absolute w-1/2 bottom-0 rounded-tr-md aspect-3/2 bg-white"></div> */}

          {/* <div className="relative max-w-xs sm:max-w-[340px] rounded-xl overflow-hidden shadow-2xl group">
            <img src="https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-6/473526882_122117507666618470_3369083212097705845_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=JyaGM6H8rgUQ7kNvwHt0rTm&_nc_oc=AdlQQAohH1vk-kpgJBNp7PgLznXtFAghkJzZCNkDWmggu2nnpDRItbfqoxuXzT-8CHpcsshLznIfeaYnc8aSxUHU&_nc_zt=23&_nc_ht=scontent.fsgn5-8.fna&_nc_gid=7ljIjJBd3bjMSDPwi12BMg&oh=00_AfKAhlmN13-N4Yc3zdo7qzD7-79H_zuaIyGTYeTSJRzoTQ&oe=683CC4C4"
              alt="Modern Architecture"
              className="w-full h-[420px] object-cover transition-transform duration-300 group-hover:scale-105"/>

              <div className="absolute bottom-4 left-4 right-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2 mb-2.5">
                  <img src="https://randomuser.me/api/portraits/men/41.jpg"
                    alt="Alex Jam"
                    className="w-7 h-7 rounded-full object-cover border-2 border-gray-50"/>
                    <span className="text-xs font-semibold text-gray-800">Alex Jam</span>
                </div>
                <h2 className="text-lg font-bold text-black uppercase tracking-tight mb-1">MODERN PROPERTY</h2>
                <p className="text-xs text-gray-600 mb-3.5">Rent in the 12+ Country</p>
                <button className="w-full bg-black text-white text-sm font-semibold py-2.5 px-4 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-opacity-50 transition-colors duration-150">
                  View Details
                </button>
              </div>
          </div> */}

          <div className="absolute  w-full">
            <div
              className=" h-50 w-50"
              style={{
                backgroundImage: hero1Img,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </div>

          <div
            className="
            absolute bottom-2 w-full grid grid-cols-3 py-2 rounded-md text-xs md:text-sm
            text-center text-white bg-[#2f2f2f]/50 backdrop-blur-xs backdrop-saturate-200"
          >
            <div className="flex flex-col items-center">
              <b className="text-[1rem] sm:text-[1.5rem]">
                <CountUp
                  end={150}
                  duration={2.5}
                  enableScrollSpy={true}
                  suffix="+"
                />
              </b>
              <span className="font-medium">Khách Hàng</span>
            </div>
            <div className="flex flex-col items-center">
              <b className="text-[1rem] sm:text-[1.5rem]">
                <CountUp
                  end={500}
                  duration={2.5}
                  enableScrollSpy={true}
                  suffix="+"
                />
              </b>
              <span className="font-medium">Dự Án</span>
            </div>
            <div className="flex flex-col items-center">
              <b className="text-[1rem] sm:text-[1.5rem]">
                <CountUp
                  end={10}
                  duration={2.5}
                  enableScrollSpy={true}
                  suffix="+"
                />
                <span className="text-[0.8rem] sm:text-[1rem]"> năm</span>
              </b>
              <span className="font-medium">Kinh Nghiệm</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
