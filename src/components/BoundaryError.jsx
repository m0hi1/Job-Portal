import React from 'react';

class BoundaryError extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Error caught by BoundaryError:", error, errorInfo);
    }

    handleRetry = () => {
        this.setState({ hasError: false });
        window.location.reload();
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="flex items-center justify-center h-screen bg-gray-100">
                    <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md">
                        <h1 className="text-3xl font-bold text-red-500 mb-4">😔 Oops! Something went wrong.</h1>
                        <p className="text-gray-700 mb-6">
                            We encountered an error. Please try again or contact support if the issue persists.
                        </p>
                        <button
                            onClick={this.handleRetry}
                            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300 ease-in-out"
                        >
                            🔄 Try Again
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default BoundaryError;
