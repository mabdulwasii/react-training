import Banner from "@/components/banner";
import HouseList from "@/components/HouseList";

const App = () => {
    return (
        <>
            {/*<Banner headerText="Providing houses all over the world" />*/}
            <Banner>Providing houses all over the world</Banner>
            <HouseList/>
        </>
    )
}

export default App;