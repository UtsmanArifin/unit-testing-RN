const IS_DEV = process.env.APP_VARIANT === 'development'
export default  ({config}) => {
    return {
        ...config,
        name: 'POS-coba',
        version: process.env.CURR_VERSION || '1.0.0',
        extra: {
            baseUrl: process.env.BASE_URL
        },
        android: {
            // package: 'com.enigma.myapp'
            package: IS_DEV ? 'com.enigma.dev.myapp' : 'com.enigma.myapp'
        }
    }
}