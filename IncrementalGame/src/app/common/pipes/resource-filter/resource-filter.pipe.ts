import { Resource } from './../../models/resource';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'resourceFilter',
    pure: false
})
export class ResourceFilterPipe implements PipeTransform {
    transform(items: Resource[]): any {
        if (!items) {
            return items;
        }
        return items.filter(item => item.revealed);
    }
}
