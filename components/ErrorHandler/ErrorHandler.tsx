import React from 'react';
import './ErrorHandler.css';

interface ErrorHandlerProps {
  message: string;
  onRetry?: () => void;
}

const ErrorHandler: React.FC<ErrorHandlerProps> = ({ message, onRetry }) => {
  return (
    <div className="error-container">
      <div className="error-content">
        <img
          src="/images/bote-pintura.jpg"
          alt="Error illustration"
          className="error-image"
        />
        <h2 className="error-message">{message}</h2>

        {onRetry && (
          <button className="retry-button" onClick={onRetry}>
            Retry
          </button>
        )}
      </div>
    </div>
  );
};

export default ErrorHandler;