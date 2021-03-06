import React from 'react'
import Login from './Components/Login/Login'
import { Container } from 'react-bootstrap'
import { AuthProvider } from './contexts/AuthContexts'

export default function Authentication() {
    return (
        <AuthProvider>
            <Container
                className="d-flex align-items-center justify-content-center"
                style={{ minHeight: "100vh" }}
            >
                <div className="w-100" style={{ maxWidth: "400px" }}>
                    <Login/>
                </div>
            </Container>
        </AuthProvider>
    )
}

