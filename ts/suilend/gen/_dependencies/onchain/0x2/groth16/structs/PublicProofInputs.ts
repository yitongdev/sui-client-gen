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
import { PKG_V35 } from "../../constants.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isPublicProofInputs(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V35}::groth16::PublicProofInputs`;
}

export interface PublicProofInputsFields {
  bytes: ToField<Vector<"u8">>;
}

export type PublicProofInputsReified = Reified<PublicProofInputs, PublicProofInputsFields>;

/**
 * Move struct: `PublicProofInputs`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::groth16`
 */
export class PublicProofInputs implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V35}::groth16::PublicProofInputs`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = PublicProofInputs.$typeName;
  readonly $fullTypeName: `${typeof PKG_V35}::groth16::PublicProofInputs`;
  readonly $typeArgs: [];
  readonly $isPhantom = PublicProofInputs.$isPhantom;

  readonly bytes: ToField<Vector<"u8">>;

  private constructor(typeArgs: [], fields: PublicProofInputsFields) {
    this.$fullTypeName = composeSuiType(
      PublicProofInputs.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V35}::groth16::PublicProofInputs`;
    this.$typeArgs = typeArgs;

    this.bytes = fields.bytes;
  }

  static reified(): PublicProofInputsReified {
    return {
      typeName: PublicProofInputs.$typeName,
      fullTypeName: composeSuiType(
        PublicProofInputs.$typeName,
        ...[],
      ) as `${typeof PKG_V35}::groth16::PublicProofInputs`,
      typeArgs: [] as [],
      isPhantom: PublicProofInputs.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => PublicProofInputs.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => PublicProofInputs.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => PublicProofInputs.fromBcs(data),
      bcs: PublicProofInputs.bcs,
      fromJSONField: (field: any) => PublicProofInputs.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => PublicProofInputs.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) => PublicProofInputs.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) => PublicProofInputs.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) => PublicProofInputs.fetch(client, id),
      new: (fields: PublicProofInputsFields) => {
        return new PublicProofInputs([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return PublicProofInputs.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<PublicProofInputs>> {
    return phantom(PublicProofInputs.reified());
  }
  static get p() {
    return PublicProofInputs.phantom();
  }

  static get bcs() {
    return bcs.struct("PublicProofInputs", {
      bytes: bcs.vector(bcs.u8()),
    });
  }

  static fromFields(fields: Record<string, any>): PublicProofInputs {
    return PublicProofInputs.reified().new({
      bytes: decodeFromFields(reified.vector("u8"), fields.bytes),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): PublicProofInputs {
    if (!isPublicProofInputs(item.type)) {
      throw new Error("not a PublicProofInputs type");
    }

    return PublicProofInputs.reified().new({
      bytes: decodeFromFieldsWithTypes(reified.vector("u8"), item.fields.bytes),
    });
  }

  static fromBcs(data: Uint8Array): PublicProofInputs {
    return PublicProofInputs.fromFields(PublicProofInputs.bcs.parse(data));
  }

  toJSONField() {
    return {
      bytes: fieldToJSON<Vector<"u8">>(`vector<u8>`, this.bytes),
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField(field: any): PublicProofInputs {
    return PublicProofInputs.reified().new({
      bytes: decodeFromJSONField(reified.vector("u8"), field.bytes),
    });
  }

  static fromJSON(json: Record<string, any>): PublicProofInputs {
    if (json.$typeName !== PublicProofInputs.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return PublicProofInputs.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): PublicProofInputs {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isPublicProofInputs(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a PublicProofInputs object`);
    }
    return PublicProofInputs.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): PublicProofInputs {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isPublicProofInputs(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a PublicProofInputs object`);
      }

      return PublicProofInputs.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return PublicProofInputs.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<PublicProofInputs> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(`error fetching PublicProofInputs object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isPublicProofInputs(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a PublicProofInputs object`);
    }

    return PublicProofInputs.fromSuiObjectData(res.data);
  }
}
