export const measurePerformance = async<T> (operationName: string, asyncFn: () => Promise<T> ) : Promise<T> => {
  const startTime = process.hrtime();
  try {
    const result = await asyncFn();
    const [seconds, nanoseconds] = process.hrtime(startTime);
    const durationInMilliseconds = (seconds * 1000) + (nanoseconds / 1e6);
    console.log(`${operationName} completed in ${durationInMilliseconds.toFixed(3)}ms`);
    return result;
  } catch (err) {
    // If there's an error, log the time taken and rethrow the error
    const [seconds, nanoseconds] = process.hrtime(startTime);
    const durationInMilliseconds = (seconds * 1000) + (nanoseconds / 1e6);
    console.error(`${operationName} failed after ${durationInMilliseconds.toFixed(3)}ms: ${err}`);
    throw err; // Allow the error to propagate
  }
};

export const generateUniqueId = () => {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}