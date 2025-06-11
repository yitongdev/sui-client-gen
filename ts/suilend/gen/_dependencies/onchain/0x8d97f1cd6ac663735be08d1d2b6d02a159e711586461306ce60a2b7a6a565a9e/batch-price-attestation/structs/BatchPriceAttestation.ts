import * as reified from "../../../../../_framework/reified.js";
import {
  PhantomReified,
  Reified,
  StructClass,
  ToField,
  ToTypeStr,
  decodeFromFields,
  decodeFromFieldsWithTypes,
  decodeFromJSONField,
  fieldToJSON,
  phantom,
} from "../../../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
} from "../../../../../_framework/util.js";
import { Vector } from "../../../../../_framework/vector.js";
import { PKG_V1 } from "../../constants.js";
import { PriceInfo } from "../../price-info/structs/index.js";
import { Header as Header1 } from "./Header.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isBatchPriceAttestation(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V1}::batch_price_attestation::BatchPriceAttestation`;
}

export interface BatchPriceAttestationFields {
  header: ToField<Header1>;
  attestationSize: ToField<"u64">;
  attestationCount: ToField<"u64">;
  priceInfos: ToField<Vector<PriceInfo>>;
}

export type BatchPriceAttestationReified = Reified<
  BatchPriceAttestation,
  BatchPriceAttestationFields
>;

/**
 * Move struct: `BatchPriceAttestation`
 * Module: `8d97f1cd6ac663735be08d1d2b6d02a159e711586461306ce60a2b7a6a565a9e::batch_price_attestation`
 */
export class BatchPriceAttestation implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V1}::batch_price_attestation::BatchPriceAttestation`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = BatchPriceAttestation.$typeName;
  readonly $fullTypeName: `${typeof PKG_V1}::batch_price_attestation::BatchPriceAttestation`;
  readonly $typeArgs: [];
  readonly $isPhantom = BatchPriceAttestation.$isPhantom;

  readonly header: ToField<Header1>;
  readonly attestationSize: ToField<"u64">;
  readonly attestationCount: ToField<"u64">;
  readonly priceInfos: ToField<Vector<PriceInfo>>;

  private constructor(typeArgs: [], fields: BatchPriceAttestationFields) {
    this.$fullTypeName = composeSuiType(
      BatchPriceAttestation.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V1}::batch_price_attestation::BatchPriceAttestation`;
    this.$typeArgs = typeArgs;

    this.header = fields.header;
    this.attestationSize = fields.attestationSize;
    this.attestationCount = fields.attestationCount;
    this.priceInfos = fields.priceInfos;
  }

  static reified(): BatchPriceAttestationReified {
    return {
      typeName: BatchPriceAttestation.$typeName,
      fullTypeName: composeSuiType(
        BatchPriceAttestation.$typeName,
        ...[],
      ) as `${typeof PKG_V1}::batch_price_attestation::BatchPriceAttestation`,
      typeArgs: [] as [],
      isPhantom: BatchPriceAttestation.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) =>
        BatchPriceAttestation.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        BatchPriceAttestation.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => BatchPriceAttestation.fromBcs(data),
      bcs: BatchPriceAttestation.bcs,
      fromJSONField: (field: any) => BatchPriceAttestation.fromJSONField(field),
      fromJSON: (json: Record<string, any>) =>
        BatchPriceAttestation.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        BatchPriceAttestation.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        BatchPriceAttestation.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) =>
        BatchPriceAttestation.fetch(client, id),
      new: (fields: BatchPriceAttestationFields) => {
        return new BatchPriceAttestation([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return BatchPriceAttestation.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<BatchPriceAttestation>> {
    return phantom(BatchPriceAttestation.reified());
  }
  static get p() {
    return BatchPriceAttestation.phantom();
  }

  static get bcs() {
    return bcs.struct("BatchPriceAttestation", {
      header: Header1.bcs,
      attestation_size: bcs.u64(),
      attestation_count: bcs.u64(),
      price_infos: bcs.vector(PriceInfo.bcs),
    });
  }

  static fromFields(fields: Record<string, any>): BatchPriceAttestation {
    return BatchPriceAttestation.reified().new({
      header: decodeFromFields(Header1.reified(), fields.header),
      attestationSize: decodeFromFields("u64", fields.attestation_size),
      attestationCount: decodeFromFields("u64", fields.attestation_count),
      priceInfos: decodeFromFields(
        reified.vector(PriceInfo.reified()),
        fields.price_infos,
      ),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): BatchPriceAttestation {
    if (!isBatchPriceAttestation(item.type)) {
      throw new Error("not a BatchPriceAttestation type");
    }

    return BatchPriceAttestation.reified().new({
      header: decodeFromFieldsWithTypes(Header1.reified(), item.fields.header),
      attestationSize: decodeFromFieldsWithTypes(
        "u64",
        item.fields.attestation_size,
      ),
      attestationCount: decodeFromFieldsWithTypes(
        "u64",
        item.fields.attestation_count,
      ),
      priceInfos: decodeFromFieldsWithTypes(
        reified.vector(PriceInfo.reified()),
        item.fields.price_infos,
      ),
    });
  }

  static fromBcs(data: Uint8Array): BatchPriceAttestation {
    return BatchPriceAttestation.fromFields(
      BatchPriceAttestation.bcs.parse(data),
    );
  }

  toJSONField() {
    return {
      header: this.header.toJSONField(),
      attestationSize: this.attestationSize.toString(),
      attestationCount: this.attestationCount.toString(),
      priceInfos: fieldToJSON<Vector<PriceInfo>>(
        `vector<${PriceInfo.$typeName}>`,
        this.priceInfos,
      ),
    };
  }

  toJSON() {
    return {
      $typeName: this.$typeName,
      $typeArgs: this.$typeArgs,
      ...this.toJSONField(),
    };
  }

  static fromJSONField(field: any): BatchPriceAttestation {
    return BatchPriceAttestation.reified().new({
      header: decodeFromJSONField(Header1.reified(), field.header),
      attestationSize: decodeFromJSONField("u64", field.attestationSize),
      attestationCount: decodeFromJSONField("u64", field.attestationCount),
      priceInfos: decodeFromJSONField(
        reified.vector(PriceInfo.reified()),
        field.priceInfos,
      ),
    });
  }

  static fromJSON(json: Record<string, any>): BatchPriceAttestation {
    if (json.$typeName !== BatchPriceAttestation.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return BatchPriceAttestation.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): BatchPriceAttestation {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isBatchPriceAttestation(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a BatchPriceAttestation object`,
      );
    }
    return BatchPriceAttestation.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): BatchPriceAttestation {
    if (data.bcs) {
      if (
        data.bcs.dataType !== "moveObject" ||
        !isBatchPriceAttestation(data.bcs.type)
      ) {
        throw new Error(`object at is not a BatchPriceAttestation object`);
      }

      return BatchPriceAttestation.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return BatchPriceAttestation.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(
    client: SuiClient,
    id: string,
  ): Promise<BatchPriceAttestation> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching BatchPriceAttestation object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isBatchPriceAttestation(res.data.bcs.type)
    ) {
      throw new Error(
        `object at id ${id} is not a BatchPriceAttestation object`,
      );
    }

    return BatchPriceAttestation.fromSuiObjectData(res.data);
  }
}
