import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import FruitInformation from "../../components/FruitInformation";

// UI Components
import Home from "../../pages/Home";

Enzyme.configure({ adapter: new Adapter() });

let wrapper;

beforeEach(() => {
    wrapper = shallow(<Home />);
});

describe("<Home />", () => {
    it("should match snapshot with props", () => {
        expect(wrapper).toMatchSnapshot();
    });

    it("should not render <FruitInformation /> errorState is true", () => {
        const wrapper = shallow(<Home />);
        wrapper.setState({ errorState: true });
        expect(wrapper.find(FruitInformation)).toHaveLength(0);
    });
});
