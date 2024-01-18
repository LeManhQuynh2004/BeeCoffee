import React from 'react'
import {
    SafeAreaView,
    KeyboardAvoidingView,
    ScrollView
} from 'react-native'
import { COLOR } from '../contract/color'
const KeyboardAvoidingContainer = ({ children }) => {
    return <SafeAreaView style={{ flex: 1, backgroundColor: COLOR.black }}>
        <KeyboardAvoidingView
            enabled={false}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}>
            {children}
        </KeyboardAvoidingView>
    </SafeAreaView>
}

export default KeyboardAvoidingContainer