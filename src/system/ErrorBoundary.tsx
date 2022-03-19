import React from "react"

interface ErrorBoundaryProps extends React.ComponentPropsWithRef<any> {}

interface ErrorBoundaryState {
  hasError: boolean
  error: any
}

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: any) {
    super(props)

    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true, error }
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error("ErrorBoundary caught an error", error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Something went wrong.</h1>
          <pre>{this.state.error}</pre>
        </div>
      )
    }

    return this.props.children
  }
}
