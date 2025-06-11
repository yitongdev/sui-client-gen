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

export function isPreparedVerifyingKey(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V35}::groth16::PreparedVerifyingKey`;
}

export interface PreparedVerifyingKeyFields {
  vkGammaAbcG1Bytes: ToField<Vector<"u8">>;
  alphaG1BetaG2Bytes: ToField<Vector<"u8">>;
  gammaG2NegPcBytes: ToField<Vector<"u8">>;
  deltaG2NegPcBytes: ToField<Vector<"u8">>;
}

export type PreparedVerifyingKeyReified = Reified<
  PreparedVerifyingKey,
  PreparedVerifyingKeyFields
>;

/**
 * Move struct: `PreparedVerifyingKey`
 * Module: `0000000000000000000000000000000000000000000000000000000000000002::groth16`
 */
export class PreparedVerifyingKey implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V35}::groth16::PreparedVerifyingKey`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = PreparedVerifyingKey.$typeName;
  readonly $fullTypeName: `${typeof PKG_V35}::groth16::PreparedVerifyingKey`;
  readonly $typeArgs: [];
  readonly $isPhantom = PreparedVerifyingKey.$isPhantom;

  readonly vkGammaAbcG1Bytes: ToField<Vector<"u8">>;
  readonly alphaG1BetaG2Bytes: ToField<Vector<"u8">>;
  readonly gammaG2NegPcBytes: ToField<Vector<"u8">>;
  readonly deltaG2NegPcBytes: ToField<Vector<"u8">>;

  private constructor(typeArgs: [], fields: PreparedVerifyingKeyFields) {
    this.$fullTypeName = composeSuiType(
      PreparedVerifyingKey.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V35}::groth16::PreparedVerifyingKey`;
    this.$typeArgs = typeArgs;

    this.vkGammaAbcG1Bytes = fields.vkGammaAbcG1Bytes;
    this.alphaG1BetaG2Bytes = fields.alphaG1BetaG2Bytes;
    this.gammaG2NegPcBytes = fields.gammaG2NegPcBytes;
    this.deltaG2NegPcBytes = fields.deltaG2NegPcBytes;
  }

  static reified(): PreparedVerifyingKeyReified {
    return {
      typeName: PreparedVerifyingKey.$typeName,
      fullTypeName: composeSuiType(
        PreparedVerifyingKey.$typeName,
        ...[],
      ) as `${typeof PKG_V35}::groth16::PreparedVerifyingKey`,
      typeArgs: [] as [],
      isPhantom: PreparedVerifyingKey.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) =>
        PreparedVerifyingKey.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) =>
        PreparedVerifyingKey.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => PreparedVerifyingKey.fromBcs(data),
      bcs: PreparedVerifyingKey.bcs,
      fromJSONField: (field: any) => PreparedVerifyingKey.fromJSONField(field),
      fromJSON: (json: Record<string, any>) =>
        PreparedVerifyingKey.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) =>
        PreparedVerifyingKey.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) =>
        PreparedVerifyingKey.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) =>
        PreparedVerifyingKey.fetch(client, id),
      new: (fields: PreparedVerifyingKeyFields) => {
        return new PreparedVerifyingKey([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return PreparedVerifyingKey.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<PreparedVerifyingKey>> {
    return phantom(PreparedVerifyingKey.reified());
  }
  static get p() {
    return PreparedVerifyingKey.phantom();
  }

  static get bcs() {
    return bcs.struct("PreparedVerifyingKey", {
      vk_gamma_abc_g1_bytes: bcs.vector(bcs.u8()),
      alpha_g1_beta_g2_bytes: bcs.vector(bcs.u8()),
      gamma_g2_neg_pc_bytes: bcs.vector(bcs.u8()),
      delta_g2_neg_pc_bytes: bcs.vector(bcs.u8()),
    });
  }

  static fromFields(fields: Record<string, any>): PreparedVerifyingKey {
    return PreparedVerifyingKey.reified().new({
      vkGammaAbcG1Bytes: decodeFromFields(
        reified.vector("u8"),
        fields.vk_gamma_abc_g1_bytes,
      ),
      alphaG1BetaG2Bytes: decodeFromFields(
        reified.vector("u8"),
        fields.alpha_g1_beta_g2_bytes,
      ),
      gammaG2NegPcBytes: decodeFromFields(
        reified.vector("u8"),
        fields.gamma_g2_neg_pc_bytes,
      ),
      deltaG2NegPcBytes: decodeFromFields(
        reified.vector("u8"),
        fields.delta_g2_neg_pc_bytes,
      ),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): PreparedVerifyingKey {
    if (!isPreparedVerifyingKey(item.type)) {
      throw new Error("not a PreparedVerifyingKey type");
    }

    return PreparedVerifyingKey.reified().new({
      vkGammaAbcG1Bytes: decodeFromFieldsWithTypes(
        reified.vector("u8"),
        item.fields.vk_gamma_abc_g1_bytes,
      ),
      alphaG1BetaG2Bytes: decodeFromFieldsWithTypes(
        reified.vector("u8"),
        item.fields.alpha_g1_beta_g2_bytes,
      ),
      gammaG2NegPcBytes: decodeFromFieldsWithTypes(
        reified.vector("u8"),
        item.fields.gamma_g2_neg_pc_bytes,
      ),
      deltaG2NegPcBytes: decodeFromFieldsWithTypes(
        reified.vector("u8"),
        item.fields.delta_g2_neg_pc_bytes,
      ),
    });
  }

  static fromBcs(data: Uint8Array): PreparedVerifyingKey {
    return PreparedVerifyingKey.fromFields(
      PreparedVerifyingKey.bcs.parse(data),
    );
  }

  toJSONField() {
    return {
      vkGammaAbcG1Bytes: fieldToJSON<Vector<"u8">>(
        `vector<u8>`,
        this.vkGammaAbcG1Bytes,
      ),
      alphaG1BetaG2Bytes: fieldToJSON<Vector<"u8">>(
        `vector<u8>`,
        this.alphaG1BetaG2Bytes,
      ),
      gammaG2NegPcBytes: fieldToJSON<Vector<"u8">>(
        `vector<u8>`,
        this.gammaG2NegPcBytes,
      ),
      deltaG2NegPcBytes: fieldToJSON<Vector<"u8">>(
        `vector<u8>`,
        this.deltaG2NegPcBytes,
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

  static fromJSONField(field: any): PreparedVerifyingKey {
    return PreparedVerifyingKey.reified().new({
      vkGammaAbcG1Bytes: decodeFromJSONField(
        reified.vector("u8"),
        field.vkGammaAbcG1Bytes,
      ),
      alphaG1BetaG2Bytes: decodeFromJSONField(
        reified.vector("u8"),
        field.alphaG1BetaG2Bytes,
      ),
      gammaG2NegPcBytes: decodeFromJSONField(
        reified.vector("u8"),
        field.gammaG2NegPcBytes,
      ),
      deltaG2NegPcBytes: decodeFromJSONField(
        reified.vector("u8"),
        field.deltaG2NegPcBytes,
      ),
    });
  }

  static fromJSON(json: Record<string, any>): PreparedVerifyingKey {
    if (json.$typeName !== PreparedVerifyingKey.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return PreparedVerifyingKey.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): PreparedVerifyingKey {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isPreparedVerifyingKey(content.type)) {
      throw new Error(
        `object at ${(content.fields as any).id} is not a PreparedVerifyingKey object`,
      );
    }
    return PreparedVerifyingKey.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): PreparedVerifyingKey {
    if (data.bcs) {
      if (
        data.bcs.dataType !== "moveObject" ||
        !isPreparedVerifyingKey(data.bcs.type)
      ) {
        throw new Error(`object at is not a PreparedVerifyingKey object`);
      }

      return PreparedVerifyingKey.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return PreparedVerifyingKey.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(
    client: SuiClient,
    id: string,
  ): Promise<PreparedVerifyingKey> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(
        `error fetching PreparedVerifyingKey object at id ${id}: ${res.error.code}`,
      );
    }
    if (
      res.data?.bcs?.dataType !== "moveObject" ||
      !isPreparedVerifyingKey(res.data.bcs.type)
    ) {
      throw new Error(
        `object at id ${id} is not a PreparedVerifyingKey object`,
      );
    }

    return PreparedVerifyingKey.fromSuiObjectData(res.data);
  }
}
