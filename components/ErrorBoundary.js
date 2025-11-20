'use client';

import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error: error };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-4">
          <h2 className="text-2xl font-bold mb-4">¡Algo salió mal!</h2>
          <p className="text-lg text-center mb-6">
            Lo sentimos, ha ocurrido un error inesperado. Por favor, intenta recargar la página o contacta con soporte si el problema persiste.
          </p>
          {process.env.NODE_ENV === 'development' && this.state.error && (
            <details className="bg-gray-200 dark:bg-gray-800 p-4 rounded-md w-full max-w-lg overflow-auto">
              <summary className="font-semibold cursor-pointer">Detalles del error</summary>
              <pre className="mt-2 text-sm text-red-600 dark:text-red-400 whitespace-pre-wrap break-words">
                {this.state.error.toString()}
              </pre>
            </details>
          )}
          <button
            onClick={() => window.location.reload()}
            className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition-colors duration-200"
          >
            Recargar Página
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
