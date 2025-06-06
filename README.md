# Tail Recursion

In the lectures, we've seen code for a recursive implementation for computing
the Fibonacci numbers. Make this implementation tail-recursive. I have not
provided a template; depending on how you choose to implement the function, it
will have a different signature.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

Hint: It may help to have a look at the iterative dynamic programming
implementation. What changes between iterations of the loop?

## Runtime Analysis

Is the asymptotic complexity of tail-recursive Fibonacci different from the
non-tail-recursive version? Why, or why not, and what is the complexity
(worst-case $\Theta$)? Add your answer, including your reasoning, to this
markdown file.

---

Initially, I do think this change does reduce the workload quite a bit, just by reducing the number of recursive calls from 2 to 1. I could also see that as $n$ increases, the values for, say, `fib(1)` or `fib(3)` in the normal implementation are going to be recalculated and used a large number of times. However, `fibTR(1, 5, 8)`, for example, isn't going to get recalculated a bunch of times. The additional parameters save that calculation.

Since $n$ decreases at each step, that means there will be $n$ function calls, resulting in a time complexity of $\Theta(n)$.

---

**I certify that I have listed all sources used to complete this exercise, including the use
of any Large Language Models. All of the work is my own, except where stated
otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is
suspected, charges may be filed against me without prior notice.**