import type { BreadcrumbProps } from '@/types';
import { ChevronRight } from 'lucide-react';

export function BreadcrumbStory({ items }: BreadcrumbProps) {
    return (
        <div className="flex items-center gap-2 py-3 ">
            {items.map((item, index) => {
                const isLast = index === items.length - 1
                return (
                    <div key={index} className="flex items-center gap-2">
                        {isLast ? (
                            <span className="text-sm font-medium text-primary">
                                {item.label}
                            </span>
                        ) : (
                            <a
                                href={item.href}
                                className="text-sm text-neutral-400 hover:text-neutral-600 transition-colors duration-200"
                            >
                                {item.label}
                            </a>
                        )}
                        {!isLast && (
                            <ChevronRight size={18} className="text-neutral-400" />
                        )}
                    </div>
                )
            })}
        </div>
    );
};