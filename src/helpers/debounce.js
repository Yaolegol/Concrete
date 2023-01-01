// @flow
const debouncingProcesses = [];

const checkProcessStatus = ({ id, time }) => {
    setTimeout(() => {
        const process = debouncingProcesses.find(({ id: _id }) => _id === id);

        if (process) {
            const { action, time } = process;

            if (Date.now() >= time) {
                action();
            }
        }
    }, time);
};

type TDebounceProps = {
    action: () => void,
    id: string,
    time: number,
};

export const debounce = ({ action, id, time }: TDebounceProps): any => {
    const process = debouncingProcesses.find(({ id: _id }) => _id === id);
    const timeToAction = Date.now() + time;
    if (!process) {
        debouncingProcesses.push({
            action,
            id,
            time: timeToAction,
        });

        checkProcessStatus({ id, time });
    } else {
        process.time = timeToAction;
        process.action = action;

        checkProcessStatus({ id, time });
    }
};
