import { useEffect, useState } from 'react';
import { IUseAppRequestResponse, IUseAppRequestProps } from './types';
import appRequest from '../../utils/app-request';

const useAppRequest = <T = unknown>({ name = 'data', url, method, data, deps = [] }: IUseAppRequestProps): IUseAppRequestResponse<T> => {
	const [responseData, setResponseData] = useState<T>();
	const [loading, setLoading] = useState(true);
	const [isRefresh, setRefresh] = useState(false);
	const [responseCode, setResponseCode] = useState(0);

	useEffect(()=>{
		setLoading(true);
		appRequest<T>({ url, method, data }).then(({ data, status })=>{
			setResponseData(data);
			setResponseCode(status);
			setLoading(false);
		});
	}, [isRefresh, ...deps]);

	const refresh = () => setRefresh(i=>!i);

	return {
		[name]: responseData,
		data: responseData as T,
		refresh,
		loading,
		responseCode
	};
};

export default useAppRequest;
