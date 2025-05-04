import { Todo } from '../types/todo';
import { Axios } from '../utils/axiosInstance';
 
type getTodoResponse = {
    complete: boolean;
    data: Todo[] | null;
    msg: string;
};
 
const getTodoAPI = async () => {
    try {
        const response = await Axios.get<getTodoResponse>('/todo');
        return response.data;
    } catch (e) {
        console.log(e);
        return {
            complete: false,
            data: null,
            msg: 'AXIOS ERROR',
        }
    }
};
 
export { getTodoAPI };