// In the example, the function getUser is exported with 'export default'.
module.exports = jest.fn(() => Promise.resolve({}))


// If the function is exported with 'export const getUser = () => {}':
module.exports = {
    getUser: jest.fn(() => Promise.resolve({}))
}

jest.mock("../react/fetch/getUser");
const getUser = require("../react/fetch/getUser");

// If function exported with 'export const getUser = () => {}':
// const {getUser} = require("../react/fetch/getUser");

describe("<Header/>", () => {
  it("should update state.user after componentDidMount()", () => {

    getUser.mockImplementation(() =>
      Promise.resolve({ username: "Username" })
    );

    const wrapper = shallow(<Header />);

    expect.assertions(1);

    return (
      getUser()
        .then(() => {
          expect(wrapper.state()).toEqual({
            user: "Username",
            pleaseLogin: false
          });
        })
    );
  });

  it("should update state.pleaseLogin after componentDidMount()", () => {
    getUser.mockImplementation(() => Promise.resolve({}));
    const wrapper = mount(<Header />);
    return (
      getUser()
        .then(() => {
          expect(wrapper.state()).toEqual({
            user: null,
            pleaseLogin: true
          });
        })
    );
  });
});

// If function exported with 'export default'
jest.mock("../react/fetch/getUser", () => jest.fn());
const getUser = require("../react/fetch/getUser");

// Else
// jest.mock("../react/fetch/getUser", () => ({getUser: jest.fn()}));
// const {getUser} = require("../react/fetch/getUser")

describe("<Header/>", () => {
  it("should update state.user after componentDidMount()", () => {
    const promise = Promise.resolve({
      username: "Username"
    });
    getUser.mockImplementation(() => promise);

    const wrapper = shallow(<Header />);

    expect.assertions(1);
    return getUser().then(() => {
      expect(wrapper.state()).toEqual({
        user: "Username",
        pleaseLogin: false
      });
    });
  });
});