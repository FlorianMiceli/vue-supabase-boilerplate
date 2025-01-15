import { example } from '@/queries/example'
import { useMutation, useQuery, useQueryClient } from '@tanstack/vue-query'
import { error } from "./display";
import { apiPost } from '@/api';

export const getExample = () => {
    return useQuery({
        ...example.get_example,
        throwOnError: () => {
            error('Error', 'Error fetching example')
            return false
        },
        refetchOnMount: false,

    })
}

export const getExampleById = (id: string) => {
    return useQuery({
        ...example.get_example_by_id(id),
        throwOnError: () => {
            error('Error', 'Error fetching example')
            return false
        },
        refetchOnMount: false,
    })
}

export const postExample = (data: Ref<any>) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async () => {
            queryClient.setQueryData(["example", "post_example", unref(data)], unref(data));
            const response = await apiPost('test/test', unref(data))
            return response.data
        },
        // Invalidate what should be invalidated
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['example', 'post_example', unref(data)] }),
        onError: () => queryClient.invalidateQueries({ queryKey: ['example', 'post_example', unref(data)] })
    })
}
