/* eslint-disable @typescript-eslint/no-unused-vars */
import type {
  DeleteObjectCommandOutput,
  DeleteObjectsCommandOutput,
  GetObjectCommandOutput,
  ListObjectsV2CommandOutput,
  PutObjectCommandInput,
  PutObjectCommandOutput,
} from "@aws-sdk/client-s3";
import type { Storage } from "./storage";

export class MockStorage implements Required<Storage> {
  get(params: {
    key: string;
    bucket?: string | undefined;
  }): Promise<GetObjectCommandOutput> {
    throw new Error("Method not implemented.");
  }
  put(params: {
    key: string;
    body: PutObjectCommandInput["Body"];
    type?: string | undefined;
    bucket?: string | undefined;
  }): Promise<PutObjectCommandOutput> {
    throw new Error("Method not implemented.");
  }
  list(
    params?:
      | { bucket?: string | undefined; prefix?: string | undefined }
      | undefined,
  ): Promise<ListObjectsV2CommandOutput> {
    throw new Error("Method not implemented.");
  }
  delete(params: {
    key: string;
    bucket?: string | undefined;
  }): Promise<DeleteObjectCommandOutput> {
    throw new Error("Method not implemented.");
  }
  deleteMany(params: {
    keys: string[];
    bucket?: string | undefined;
  }): Promise<DeleteObjectsCommandOutput> {
    throw new Error("Method not implemented.");
  }
  destroy(): void {
    throw new Error("Method not implemented.");
  }
}
