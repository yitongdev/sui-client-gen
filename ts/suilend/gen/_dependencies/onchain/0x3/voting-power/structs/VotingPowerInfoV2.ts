import {
  PhantomReified,
  Reified,
  StructClass,
  ToField,
  ToTypeStr,
  decodeFromFields,
  decodeFromFieldsWithTypes,
  decodeFromJSONField,
  phantom,
} from "../../../../../_framework/reified.js";
import {
  FieldsWithTypes,
  composeSuiType,
  compressSuiType,
} from "../../../../../_framework/util.js";
import { PKG_V21 } from "../../constants.js";
import { bcs } from "@mysten/sui/bcs";
import { SuiClient, SuiObjectData, SuiParsedData } from "@mysten/sui/client";
import { fromBase64 } from "@mysten/sui/utils";

export function isVotingPowerInfoV2(type: string): boolean {
  type = compressSuiType(type);
  return type === `${PKG_V21}::voting_power::VotingPowerInfoV2`;
}

export interface VotingPowerInfoV2Fields {
  validatorIndex: ToField<"u64">;
  votingPower: ToField<"u64">;
  stake: ToField<"u64">;
}

export type VotingPowerInfoV2Reified = Reified<VotingPowerInfoV2, VotingPowerInfoV2Fields>;

/**
 * Move struct: `VotingPowerInfoV2`
 * Module: `0000000000000000000000000000000000000000000000000000000000000003::voting_power`
 */
export class VotingPowerInfoV2 implements StructClass {
  __StructClass = true as const;

  static readonly $typeName = `${PKG_V21}::voting_power::VotingPowerInfoV2`;
  static readonly $numTypeParams = 0;
  static readonly $isPhantom = [] as const;

  readonly $typeName = VotingPowerInfoV2.$typeName;
  readonly $fullTypeName: `${typeof PKG_V21}::voting_power::VotingPowerInfoV2`;
  readonly $typeArgs: [];
  readonly $isPhantom = VotingPowerInfoV2.$isPhantom;

  readonly validatorIndex: ToField<"u64">;
  readonly votingPower: ToField<"u64">;
  readonly stake: ToField<"u64">;

  private constructor(typeArgs: [], fields: VotingPowerInfoV2Fields) {
    this.$fullTypeName = composeSuiType(
      VotingPowerInfoV2.$typeName,
      ...typeArgs,
    ) as `${typeof PKG_V21}::voting_power::VotingPowerInfoV2`;
    this.$typeArgs = typeArgs;

    this.validatorIndex = fields.validatorIndex;
    this.votingPower = fields.votingPower;
    this.stake = fields.stake;
  }

  static reified(): VotingPowerInfoV2Reified {
    return {
      typeName: VotingPowerInfoV2.$typeName,
      fullTypeName: composeSuiType(
        VotingPowerInfoV2.$typeName,
        ...[],
      ) as `${typeof PKG_V21}::voting_power::VotingPowerInfoV2`,
      typeArgs: [] as [],
      isPhantom: VotingPowerInfoV2.$isPhantom,
      reifiedTypeArgs: [],
      fromFields: (fields: Record<string, any>) => VotingPowerInfoV2.fromFields(fields),
      fromFieldsWithTypes: (item: FieldsWithTypes) => VotingPowerInfoV2.fromFieldsWithTypes(item),
      fromBcs: (data: Uint8Array) => VotingPowerInfoV2.fromBcs(data),
      bcs: VotingPowerInfoV2.bcs,
      fromJSONField: (field: any) => VotingPowerInfoV2.fromJSONField(field),
      fromJSON: (json: Record<string, any>) => VotingPowerInfoV2.fromJSON(json),
      fromSuiParsedData: (content: SuiParsedData) => VotingPowerInfoV2.fromSuiParsedData(content),
      fromSuiObjectData: (content: SuiObjectData) => VotingPowerInfoV2.fromSuiObjectData(content),
      fetch: async (client: SuiClient, id: string) => VotingPowerInfoV2.fetch(client, id),
      new: (fields: VotingPowerInfoV2Fields) => {
        return new VotingPowerInfoV2([], fields);
      },
      kind: "StructClassReified",
    };
  }

  static get r() {
    return VotingPowerInfoV2.reified();
  }

  static phantom(): PhantomReified<ToTypeStr<VotingPowerInfoV2>> {
    return phantom(VotingPowerInfoV2.reified());
  }
  static get p() {
    return VotingPowerInfoV2.phantom();
  }

  static get bcs() {
    return bcs.struct("VotingPowerInfoV2", {
      validator_index: bcs.u64(),
      voting_power: bcs.u64(),
      stake: bcs.u64(),
    });
  }

  static fromFields(fields: Record<string, any>): VotingPowerInfoV2 {
    return VotingPowerInfoV2.reified().new({
      validatorIndex: decodeFromFields("u64", fields.validator_index),
      votingPower: decodeFromFields("u64", fields.voting_power),
      stake: decodeFromFields("u64", fields.stake),
    });
  }

  static fromFieldsWithTypes(item: FieldsWithTypes): VotingPowerInfoV2 {
    if (!isVotingPowerInfoV2(item.type)) {
      throw new Error("not a VotingPowerInfoV2 type");
    }

    return VotingPowerInfoV2.reified().new({
      validatorIndex: decodeFromFieldsWithTypes("u64", item.fields.validator_index),
      votingPower: decodeFromFieldsWithTypes("u64", item.fields.voting_power),
      stake: decodeFromFieldsWithTypes("u64", item.fields.stake),
    });
  }

  static fromBcs(data: Uint8Array): VotingPowerInfoV2 {
    return VotingPowerInfoV2.fromFields(VotingPowerInfoV2.bcs.parse(data));
  }

  toJSONField() {
    return {
      validatorIndex: this.validatorIndex.toString(),
      votingPower: this.votingPower.toString(),
      stake: this.stake.toString(),
    };
  }

  toJSON() {
    return { $typeName: this.$typeName, $typeArgs: this.$typeArgs, ...this.toJSONField() };
  }

  static fromJSONField(field: any): VotingPowerInfoV2 {
    return VotingPowerInfoV2.reified().new({
      validatorIndex: decodeFromJSONField("u64", field.validatorIndex),
      votingPower: decodeFromJSONField("u64", field.votingPower),
      stake: decodeFromJSONField("u64", field.stake),
    });
  }

  static fromJSON(json: Record<string, any>): VotingPowerInfoV2 {
    if (json.$typeName !== VotingPowerInfoV2.$typeName) {
      throw new Error("not a WithTwoGenerics json object");
    }

    return VotingPowerInfoV2.fromJSONField(json);
  }

  static fromSuiParsedData(content: SuiParsedData): VotingPowerInfoV2 {
    if (content.dataType !== "moveObject") {
      throw new Error("not an object");
    }
    if (!isVotingPowerInfoV2(content.type)) {
      throw new Error(`object at ${(content.fields as any).id} is not a VotingPowerInfoV2 object`);
    }
    return VotingPowerInfoV2.fromFieldsWithTypes(content);
  }

  static fromSuiObjectData(data: SuiObjectData): VotingPowerInfoV2 {
    if (data.bcs) {
      if (data.bcs.dataType !== "moveObject" || !isVotingPowerInfoV2(data.bcs.type)) {
        throw new Error(`object at ${data.objectId} is not a VotingPowerInfoV2 object`);
      }

      return VotingPowerInfoV2.fromBcs(fromBase64(data.bcs.bcsBytes));
    }
    if (data.content) {
      return VotingPowerInfoV2.fromSuiParsedData(data.content);
    }
    throw new Error(
      "Both `bcs` and `content` fields are missing from the data. Include `showBcs` or `showContent` in the request.",
    );
  }

  static async fetch(client: SuiClient, id: string): Promise<VotingPowerInfoV2> {
    const res = await client.getObject({ id, options: { showBcs: true } });
    if (res.error) {
      throw new Error(`error fetching VotingPowerInfoV2 object at id ${id}: ${res.error.code}`);
    }
    if (res.data?.bcs?.dataType !== "moveObject" || !isVotingPowerInfoV2(res.data.bcs.type)) {
      throw new Error(`object at id ${id} is not a VotingPowerInfoV2 object`);
    }

    return VotingPowerInfoV2.fromSuiObjectData(res.data);
  }
}
