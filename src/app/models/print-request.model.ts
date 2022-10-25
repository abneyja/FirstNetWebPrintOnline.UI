export interface PrintRequest {
    id: string;
    ordernumber: string;
    username: string;
    email: string;
    timestamp: string;
    timestale: number;
    printsonar: boolean;
    printphone: boolean;
    printorder: boolean;
    printbarcodes: boolean;
    printcoam: boolean;
    automode: boolean;
    status: string;    
}