
import HeroPage from "../../components/Hero/HeroPage"
import Story from "../../components/Story/Story"
import StoryAward from "../../components/StoryAward/StoryAward"
import StoryTeam from "../../components/StoryTeam/StoryTeam"
import StoryValue from "../../components/StoryValue/StoryValue"

export const OurStory = () => {
    return (
        <div className="min-h-screen">
            <div>
                <HeroPage
                    page="Về Chúng Tôi"
                    title="VuDecor là công ty thiết kế nội thất chuyên tạo ra những không gian thanh lịch và tiện dụng, 
                    phản ánh tính cách và phong cách độc đáo của mỗi khách hàng."
                    image="https://www.sustainablejungle.com/wp-content/uploads/2022/07/Header-Image-by-Spacejoy-Unsplash.jpg"
                />
            </div>
            <div>
                <Story />
            </div>
            <div>
                <StoryTeam />
            </div>
            <div>
                <StoryValue />
            </div>
            <div>
                <StoryAward />
            </div>
        </div>
    )
}