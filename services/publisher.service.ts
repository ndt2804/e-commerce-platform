import Publisher, { IPublisher } from '../types/publisher.type'
export async function newPublisher(name: string, cover: string, description: string,): Promise<IPublisher> {
    try {
        const newPublisher = new Publisher({
            name,
            cover,
            description,
        });
        return newPublisher.save();
    } catch (error) {
        throw error;
    }
}
export async function getPublisher(): Promise<IPublisher[]> {
    try {
        const getPublisher = Publisher.find({});
        return getPublisher
    } catch (error) {
        throw error;
    }
}


