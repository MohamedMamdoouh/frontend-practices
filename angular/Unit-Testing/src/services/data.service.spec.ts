import { TestBed } from '@angular/core/testing';
import { DataService } from './data.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('DataService', () => {
  let service: DataService;
  let testingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    testingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch all data', () => {
    const mockData = [{ id: 1, title: 'Test Todo' }];
    service.getAllData().subscribe((data) => {
      expect(data).toEqual(mockData);
    });

    const req = testingController.expectOne('https://jsonplaceholder.typicode.com/todos');
    expect(req.request.method).toBe('GET');
    req.flush(mockData, { status: 200, statusText: 'OK' });
  });

  it('should fetch data by id', () => {
    const mockData = { id: 1, title: 'Test Todo' };
    service.getDataById(1).subscribe((data) => {
      expect(data).toEqual(mockData);
    });

    const req = testingController.expectOne('https://jsonplaceholder.typicode.com/todos/1');
    expect(req.request.method).toBe('GET');
    req.flush(mockData, { status: 200, statusText: 'OK' });
  });

  it('should update data', () => {
    const mockData = { id: 1, title: 'Updated Todo' };
    service.updateData(1, mockData).subscribe((data) => {
      expect(data).toEqual(mockData);
    });

    const req = testingController.expectOne('https://jsonplaceholder.typicode.com/todos/1');
    expect(req.request.method).toBe('PUT');
    expect(req.request.body).toEqual(mockData);
    req.flush(mockData, { status: 200, statusText: 'OK' });
  });

  afterEach(() => {
    testingController.verify();
  });
});
