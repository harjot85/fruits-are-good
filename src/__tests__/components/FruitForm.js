import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

// UI Components
import FruitForm from "../../components/FruitForm";
import { Button } from "reactstrap";

Enzyme.configure({ adapter: new Adapter() });

const mockProps = {
    onInputChange: jest.fn(),
    onClickHandler: jest.fn(),
    onKeyDown: jest.fn(),
};

let wrapper;

beforeEach(() => {
    wrapper = shallow(<FruitForm {...mockProps} />);
});

describe("<FruitForm />", () => {
    it("should match snapshot with props", () => {
        expect(wrapper).toMatchSnapshot();
    });

    it("should render one <Button> component", () => {
        expect(wrapper.find(Button)).toHaveLength(1);
    });
});
