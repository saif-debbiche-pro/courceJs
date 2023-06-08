// always the hart of js runtime is js engine(heap + call stack)
// web APIs (DOM,Timers,FETCH API ,....) get access to them by the global window object
// callback queue:data structor that contain functions ready to be executed (after the event hapens the callback 
// function is added to the callback queue and when the call stack is empty the callback function passed to the stack 
// to executed and all that hapen wit the EVENT LOOP )
// event loop : takes events from the callback queue to the call stack when it empty