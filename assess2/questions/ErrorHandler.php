<?php

namespace IMathAS\assess2\questions;

use Throwable;

class ErrorHandler
{
    const ERROR_CODES = array(
        E_ERROR => 'error',
        E_WARNING => 'warning',
        E_NOTICE => 'notice',
    );

    /**
     * Warning handler for question evals and scoring.
     *
     * Sometimes errors are generating while eval'ing question writer code
     * due to missing variables or incorrectly coded questions.
     *
     * @param int $errno
     * @param string $errstr
     * @param string $errfile
     * @param int $errline
     * @param array $errcontext
     * @return bool
     */
    public static function evalErrorHandler(int $errno, string $errstr, string $errfile,
                                            int $errline, array $errcontext): bool
    {
        error_log(sprintf('Caught error by QuestionGenerator in %s:%s -- %s',
            $errfile, $errline, $errstr));

        if (extension_loaded('newrelic') && $errno !== E_NOTICE) {
            newrelic_notice_error($errno, $errstr, $errfile, $errline, $errcontext);
        }

        // True = Don't execute the PHP internal error handler.
        // False = Populate $php_errormsg.
        // Reference: https://secure.php.net/manual/en/function.set-error-handler.php
        return true;
    }

    /**
     * Exception handler for question evals and scoring.
     *
     * Sometimes errors are generating while eval'ing question writer code
     * due to missing variables or incorrectly coded questions.
     *
     * @param Throwable $t
     */
    public static function evalExceptionHandler(Throwable $t): void
    {
        error_log(sprintf('Caught exception by QuestionGenerator from %s:%d -- %s',
            $t->getFile(), $t->getLine(), $t->getMessage()));

        if (extension_loaded('newrelic')) {
            newrelic_notice_error($t);
        }
    }
}
