
import HeroPage from "../../components/Hero/HeroPage"
import Story from "../../components/Story/Story"
import StoryAward from "../../components/StoryAward/StoryAward"
import StoryTeam from "../../components/StoryTeam/StoryTeam"
import StoryValue from "../../components/StoryValue/StoryValue"

export const OurStory = () => {
    return (
        <div className="min-h-screen">
            <div>
                <HeroPage />
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