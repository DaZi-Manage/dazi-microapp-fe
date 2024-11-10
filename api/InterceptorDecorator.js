import InterceptorRequest from "./InterceptorRequest";
import InterceptorResponse from "./InterceptorResponse";

export default function Interceptor(options) {
  return (target, _, descriptor) => {
    const originalMethod = descriptor.value;
    const {
      showLoading
    } = options || {}
    descriptor.value = async function (...args) {
      if (showLoading) {
        uni.showLoading({
          title: 'Loading...'
        });
      }

      try {
        const [, response] = await originalMethod.apply(this, InterceptorRequest(target, ...args));
        return InterceptorResponse(response.data)
      } catch (error) {
        throw error;
      } finally {
        if (showLoading) {
          uni.hideLoading();
        }
      }
    };

    return descriptor;
  };
}