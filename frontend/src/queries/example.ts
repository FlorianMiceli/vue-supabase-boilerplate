import { apiGet, apiPost } from '@/api'
import { createQueryKeys } from '@lukemorales/query-key-factory'

export const example = createQueryKeys('example', {
  get_example: {
    queryKey: null,
    queryFn: async () => {
      const response = await apiGet("test/test")
      return response.data
    }
  },
  get_example_by_id: (id: string) => ({
    queryKey: [id],
    queryFn: async () => {
      const response = await apiGet(`test/test/${id}`)
      return response.data
    }
  }),
  post_example: (data: Ref<any>) => ({
    queryKey: [data],
    queryFn: async () => {
      const response = await apiPost("test/test", unref(data))
      return response.data
    }
  })
})

