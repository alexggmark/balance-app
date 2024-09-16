import { IResolvers } from 'graphql-tools';
import { Tracker } from '../models/trackerModel';

const resolvers: IResolvers = {
  Query: {
    trackers: async () => {
      try {
        const trackers = await Tracker.find();
        return trackers;
      } catch (error) {
        throw new Error('Failed to fetch trackers');
      }
    },
  },
  Mutation: {
    createTracker: async (_, { name, type }) => {
      try {
        const tracker = new Tracker({ name, type });
        await tracker.save();
        return tracker;
      } catch (error) {
        throw new Error('Failed to create tracker');
      }
    },
    updateTracker: async (_, { id, data }) => {
      try {
        const tracker = await Tracker.findById(id);
        if (!tracker) {
          throw new Error('Tracker not found');
        }
        tracker.data = data;
        await tracker.save();
        return tracker;
      } catch (error) {
        throw new Error('Failed to update tracker');
      }
    },
  },
};

export default resolvers;