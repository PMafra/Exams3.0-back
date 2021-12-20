var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/* eslint-disable @typescript-eslint/no-explicit-any */
import RequestError from '../errors/requestError';
const validateWithJoi = ({ object, schema }) => __awaiter(void 0, void 0, void 0, function* () {
    const isCorrectBody = schema.validate(object);
    if (isCorrectBody.error) {
        throw new RequestError(isCorrectBody.error.details[0].message);
    }
    return true;
});
export { validateWithJoi, };
