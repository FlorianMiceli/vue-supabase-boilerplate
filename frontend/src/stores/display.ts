export const useDisplayStore = defineStore('display', {
    state: () => ({
    }),

    actions: {
        success(title: string, message: string) {
            ElNotification({
                title: title,
                message: message,
                type: 'success'
            });
        },
        error(title: string, message: string) {
            ElNotification({
                title: title,
                message: message,
                type: 'error'
            });
        }, 
        warning(title: string, message: string) {
            ElNotification({
                title: title,
                message: message,
                type: 'warning'
            });
        },
        info(title: string) {
            ElNotification({
                title: title,
                type: 'info'
            });
        },
    },
});