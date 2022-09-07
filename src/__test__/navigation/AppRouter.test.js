import { fireEvent, screen, waitFor } from "@testing-library/react-native";
import AppRouter from "../../navigation/AppRouter";
import { ROUTE } from "../../shared/hook/constant";
import { themeRender } from "../../testHelper/CustomRender";

const mockTokenExist = jest.fn();
const mockOnLogout = jest.fn();
jest.mock("../../shared/hook/UseAuth", () => {
    return {
        useAuth: () => ({
            isTokenExist: mockTokenExist,
            onLogout: mockOnLogout
        })
    }
})
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper')
describe('App Router', () => {
    test('Should navigate to home then token is exist', () => {
        mockTokenExist.mockResolvedValue(true);
        themeRender(<AppRouter/>);
        expect(waitFor(() => screen.getAllByA11yHint('Home'))).toBeTruthy()
    });
    test('Should navigate to login when token is not exist', () => {
        mockTokenExist.mockResolvedValue(false);
        themeRender(<AppRouter/>);
        expect(waitFor(() => screen.getAllByA11yHint('Welcome'))).toBeTruthy()
    });
    test('Should navigate to login when token throws exception', () => {
        mockTokenExist.mockRejectedValue(new Error('error'));
        themeRender(<AppRouter/>);
        expect(waitFor(() => screen.getAllByA11yHint('Welcome'))).toBeTruthy()
    });

    test('Should navigate to login when user logout', () => {
        mockOnLogout.mockResolvedValue(true)
        themeRender(<AppRouter initRoute={ROUTE.HOME}/>);
        const logoutButtonElem = screen.getByText(/Logout/);
        fireEvent.press(logoutButtonElem);
        expect(waitFor(() => screen.getAllByA11yHint('Login'))).toBeTruthy()
    });
})