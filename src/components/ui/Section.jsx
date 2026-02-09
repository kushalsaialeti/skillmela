import { cn } from '../../utils/cn';

export const Section = ({
    children,
    className,
    id,
    ...props
}) => {
    return (
        <section
            id={id}
            className={cn(
                'py-16 md:py-24 px-4 md:px-8 relative',
                className
            )}
            {...props}
        >
            <div className="max-w-7xl mx-auto">
                {children}
            </div>
        </section>
    );
};
