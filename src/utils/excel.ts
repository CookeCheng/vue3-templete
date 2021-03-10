import { createApp } from 'vue';
const app = createApp({});
import XLSX from 'xlsx';
app.config.globalProperties.$xlsx = XLSX;
interface SheetItem {
  sheetName: string;
  from: string;
  to: string;
  merges: any;
  data: any;
}
/**
 * @desc 解析excel
 */
export function parseExcel(file: Blob): Promise<Array<SheetItem>> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: 'binary' });
      const list = [];
      const sheets: any = workbook.Sheets;
      for (const sheet in sheets) {
        // eslint-disable-next-line no-prototype-builtins
        if (sheets.hasOwnProperty(sheet) && sheets[sheet]['!ref']) {
          const [from, to] = sheets[sheet]['!ref'].split(':');
          const merges = sheets[sheet]['!merges'];
          list.push({
            sheetName: sheet,
            from,
            to,
            merges,
            data: XLSX.utils.sheet_to_json(sheets[sheet])
          });
        }
      }
      resolve(list);
    };
    reader.onerror = err => {
      reject(err);
    };
    reader.readAsBinaryString(file); // 原生 input
    // reader.readAsBinaryString(file.raw) // element upload
  });
}

interface ExcelParam {
  data: any;
  from: string;
  name: string;
  sheetName: string;
  bookType?: string;
  merges?: any;
}

/**
 * @desc 导出excel
 */
export function exportExcel({
  data = [],
  from = 'A1',
  name = '表格',
  sheetName = 'sheet1',
  bookType = 'xlsx',
  merges = undefined
}: ExcelParam): void {
  const ws = XLSX.utils.json_to_sheet([]);
  if (merges) {
    ws['!merges'] = merges;
  }
  XLSX.utils.sheet_add_json(ws, data, { origin: from });
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, sheetName);
  XLSX.writeFile(wb, `${name}.${bookType}`);
}
