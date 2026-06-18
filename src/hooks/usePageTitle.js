import { useEffect } from 'react';

export function usePageTitle(title) {
    useEffect(() => {
        const baseTitle = "Management System";
        if (title) {
            document.title = `${title}`;
        } else {
            document.title = baseTitle;
        }
    }, [title]);
}