import { NavigationContainer } from "@react-navigation/native"
import { render } from "@testing-library/react-native"
import { ThemeProvider } from "../shared/context/ThemeContext"

export const themeRender = (wrappedUi, {...renderOptions}={}) => {
    const Wrapper = ({children}) => {
        return(
            <ThemeProvider>
                <NavigationContainer>
                    {children}
                </NavigationContainer>
            </ThemeProvider>
        )
    }
    return render(wrappedUi, {wrapper: Wrapper, ...renderOptions});
}