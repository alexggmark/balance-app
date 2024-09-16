import express from 'express';
import { TrackerController } from '../controllers/trackerController';

export function setRoutes(app: express.Application): void {
  const trackerController = new TrackerController();

  // Define routes for tracker management
  app.post('/api/trackers', trackerController.createTracker);
  app.get('/api/trackers', trackerController.getTrackers);
  app.get('/api/trackers/:id', trackerController.getTrackerById);
  app.put('/api/trackers/:id', trackerController.updateTracker);
  app.delete('/api/trackers/:id', trackerController.deleteTracker);
}