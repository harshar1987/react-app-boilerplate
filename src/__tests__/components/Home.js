
import React from "react";
import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import Home from "../../components/Home";
import Header from "../../components/Header";
import { Movies } from "../../components/movie/Movies";

describe("Movie Cards Home component", () => {

    it("renders without error", () => {
        const app = document.createElement("div");
        ReactDOM.render(<MemoryRouter><Home /></MemoryRouter>, app);
        ReactDOM.unmountComponentAtNode(app);
    });

    it("should have header and movies as child components", () => {
        const homeComponent = global.shallow(<Home />);
        const header = homeComponent.find(Header);
        const movies = homeComponent.find(Movies);

        expect(header).toHaveLength(1);
        expect(movies).toHaveLength(1);
    });

    it("should have header title as per title set in default props", () => {
        const homeComponent = global.mount(<MemoryRouter><Home /></MemoryRouter>).props().children;
        expect(homeComponent.props.headerTitle).toEqual("Movie Cards");
    });

    it("should have header title as per the title passed in props", () => {

        let title = "IMDB movie cards";
        const wrapper = global.mount(<MemoryRouter><Home headerTitle={title} /></MemoryRouter>);
        let homeComponent = wrapper.find(Home).first();
        expect(homeComponent.props().headerTitle).toEqual(title);

        title = "movie";
        wrapper.setProps({ children: React.cloneElement(wrapper.props().children, { headerTitle: title }) });
        homeComponent = wrapper.find(Home).first();
        expect(homeComponent.props().headerTitle).toEqual(title);
    });

    it("matches the home component snapshot", () => {
        const tree = global.shallow(<Home />);
        expect(tree).toMatchSnapshot();
    });

    it("matches the home component with the provided title", () => {
        const tree = global.shallow(<Home headerTitle="Custom Title" />);
        expect(tree).toMatchSnapshot();
    });
});

